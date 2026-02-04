import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const linkedin = formData.get('linkedin')
    const github = formData.get('github')
    const position = formData.get('position')
    const resumeFile = formData.get('resume')

    if (!name || !email || !phone) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
      })
    }

    // Configure GoDaddy SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.GODADDY_SMTP_HOST || 'smtpout.secureserver.net',
      port: Number(process.env.GODADDY_SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.GODADDY_SMTP_USER, // e.g. hello@intellosoft.io
        pass: process.env.GODADDY_SMTP_PASS,
      },
    })

    const attachments = []
    if (resumeFile && typeof resumeFile !== 'string') {
      const arrayBuffer = await resumeFile.arrayBuffer()
      attachments.push({
        filename: resumeFile.name || 'resume',
        content: Buffer.from(arrayBuffer),
        contentType: resumeFile.type || 'application/octet-stream',
      })
    }

    const mailOptions = {
      from: `"Career Application" <${process.env.GODADDY_SMTP_USER}>`,
      to: 'hello@intellosoft.io',
      subject: `New application for ${position || 'a position'} from ${name}`,
      replyTo: email,
      text: `
New career application received.

Position: ${position || 'N/A'}

Name: ${name}
Email: ${email}
Phone: ${phone}
LinkedIn: ${linkedin || 'N/A'}
GitHub: ${github || 'N/A'}
      `,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Position:</strong> ${position || 'N/A'}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> ${linkedin || 'N/A'}</p>
        <p><strong>GitHub:</strong> ${github || 'N/A'}</p>
        <p><strong>Resume:</strong> Attached file</p>
      `,
      attachments,
    }

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error('Error in /api/apply:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    })
  }
}

