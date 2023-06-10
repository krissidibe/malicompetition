import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../utils/prisma";
import bcrypt from "bcryptjs";
import multer from "multer";


export async function GET(req: NextRequest) {
  const datas = [  {
   "userId": 1,
   "id": 1,
   "title": "delectus aut User",
   "completed": true
 },
 {
   "userId": 1,
   "id": 2,
   "title": "User ut nam facilis et officia qui",
   "completed": true
 },]
   return new Response(JSON.stringify(datas));
 }

export async function POST(req: NextRequest, res: NextResponse) {
 
  const { email, firstName, lastName, number, sexe, password, type } =
    await req.json();
  

  if (type == "create") {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (user != null)
        return new Response(
          JSON.stringify({ user: null, message: "L'email existe déjà" })
        );


        
      const passwordCryp = await bcrypt.hash(password, 10);
      const data = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          number,
          sexe,
          password: passwordCryp,
        },
      });
      return new Response(
        JSON.stringify({ user: data, message: "Votre compte est créer" })
      );

      /*  res.status(200).json(data); */
    } catch (error) {
      /*       res.status(500).json(error); */
    }
    
  }
  if (type == "user") {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (user == null)
        return new Response(
          JSON.stringify({ user: null, message: "Erreur de récupération" })
        );

    
      return new Response(
        JSON.stringify({ user: user, message: "Votre compte est créer" })
      );

      /*  res.status(200).json(data); */
    } catch (error) {
      /*       res.status(500).json(error); */
    }
  } 
  
  
  else {
    try {
      const data = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (data == null)
        return new Response(
          JSON.stringify({
            user: null,
            message: "L'email n'existe pas veuillez créer votre compte",
          })
        );

      const isPasswordValid = await bcrypt.compare(password, data.password);
      if (!isPasswordValid) {
        return new Response(
          JSON.stringify({ user: null, message: "password incorrect" })
        );
      }

      return new Response(JSON.stringify({ user: data, message: "succes" }));
    } catch (error) {
      return new Response(JSON.stringify({ error: "error" }));
      /*       res.status(500).json(error); */
    }
  }
}

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix)
  }
})


export async function PATCH(req: NextRequest, res: NextResponse) {

  
/*     
  const formData =  req.formData() ; 
 const dd =  multer({storage}).single("image")
    return new Response(
      JSON.stringify({
        user: "dataUpdate",
        message: `Votre  ${'name'}`,
      })
    ); */
 
 //   
    
 

    const { email, firstName, lastName, number, sexe, password, type,birthDate,
      numberNina,image } =
      await req.json();
  const data = await prisma.user.findFirst({
    where: {
      AND: [{ email: email }, { role: "USER" }],
    },
  });

  if (data == null)
    return new Response(
      JSON.stringify({
        user: data,
        message: "L'email n'existe pas veuillez créer votre compte",
      })
    );


/*     return new Response(
      JSON.stringify({
        user: {},
        message: `Votre profile est  ${numberNina}`,
      })
    ); */

 
    const dataUpdate = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
       firstName:firstName,
       lastName:lastName,
       sexe:sexe,
       birthDate: birthDate,
       nina : numberNina,
       number : number,
 
      },
    })
  return new Response(
    JSON.stringify({
      user: dataUpdate,
      message: `Votre profile est modifier`,
    })
  );
}
