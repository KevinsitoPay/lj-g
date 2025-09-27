import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    console.log("API llamada recibida");
    
    const body = await request.json();
    console.log("Datos recibidos:", body);
    
    const { date, time, name, city, email, phone, projectMessage } = body;

    console.log("Enviando email con Resend...");
    
    const { data, error } = await resend.emails.send({
      from: 'Contacto <noreply@ljandgonzalez.com>',
      to: ['oropezavazquezk58@gmail.com', 'andres@monette.dev'], // Cambia temporalmente por este email de prueba
      subject: `Nueva solicitud de proyecto - ${name}`,
      react: EmailTemplate({ date, time, name, city, email, phone, projectMessage }),
    });

    if (error) {
      console.error("Error de Resend:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    console.log("Email enviado exitosamente:", data);
    return Response.json({ success: true, data });
    
  } catch (error) {
    console.error('Error en API:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}