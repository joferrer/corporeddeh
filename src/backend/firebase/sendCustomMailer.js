import { addDoc, collection } from 'firebase/firestore/lite'
import { FireBaseDB } from './firebaseConfig'

const db = FireBaseDB

const successSendMail = {
  message: {
    subject: 'Correo recibido',
    text: 'Su correo ha sido recibido correctamente, nos pondremos en contacto con usted lo antes posible',
    html: '<p>Su correo ha sido recibido correctamente, nos pondremos en contacto con usted lo antes posible</p>'
  }

}
const messageGenerator = (name, email, message, subject) => {
  return {
    to: corporationEmail,
    message: {
      subject: `Correo recibido de ${name} - ${email} : ${subject}`,
      text: message,
      html: `<p>${message}</p>`
    }
  }
}

const responseMessageGenerator = (name, email) => {
  return {
    to: email,
    message: {
      subject: `${name}- Hemos recibido su mensaje`,
      text: 'Estimado/a ' + name + ': \n\nHemos recibido exitosamente su mensaje y le agradecemos por contactarnos. Uno de nuestros representantes se comunicará con usted muy pronto para darle seguimiento a su solicitud.\n\nGracias por confiar en nosotros. Estamos para servirle.\n\nAtentamente,\nEl Equipo de Corporeddeh',

      html: '<p>Estimado/a ' + name + ':</p><p>Hemos recibido exitosamente su mensaje y le agradecemos por contactarnos. Uno de nuestros representantes se comunicará con usted muy pronto para darle seguimiento a su solicitud.</p><p>Gracias por confiar en nosotros. Estamos para servirle.</p><p>Atentamente,</p><p>El Equipo de Corporeddeh</p>'

    }
  }
}

const corporationEmail = 'ferrerjeison7@gmail.com'

export const sendCustomMailer = async (email, subject, message, name) => {
  try {
    console.log(email, subject, message)
    const collectionRef = collection(db, 'email')
    const emailContent = messageGenerator(name, email, message, subject)
    console.log(emailContent)
    const resp = await addDoc(collectionRef, emailContent)
    console.log(resp)
    const response = responseMessageGenerator(name, email)
    const resp2 = await addDoc(collectionRef, response)

    console.log(resp2)
    return {
      status: 'success',
      message: 'Correo enviado correctamente'
    }
  } catch (error) {
    return {
      status: 'error',
      message: 'No se pudo enviar el correo'
    }
  }
}
