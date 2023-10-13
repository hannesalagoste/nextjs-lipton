export default async function contactHandler(req: { method: string; body: { first_name: any; last_name: any; streetno: any; postcode: any; city: any; email: any; clothing_size: any; shoe_size: any; image: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; error?: string; }): void; new(): any; }; end: { (): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    const { first_name, last_name, streetno, postcode, city, email, clothing_size, shoe_size, image } = req.body;

    // Validate the form data here if needed

    const contactData = {
      webform_id: "liptonform",
      first_name,
      last_name, 
      streetno, 
      postcode, 
      city, 
      email, 
      clothing_size, 
      shoe_size, 
      image
    };

    try {
      const response = await fetch('https://drupal9.3.micro-plattform.com/webform_rest/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error('Contact form submission failed');
      }

      // Handle successful submission
      res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
      // Handle submission error
      res.status(500).json({ error: 'An error occurred while submitting the form' });
    }
  } else {
    // Return a 405 "Method Not Allowed" status if the request is not a POST request
    res.status(405).end();
  }
}
