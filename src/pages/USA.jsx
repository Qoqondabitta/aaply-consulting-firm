import CountryPage from '../components/CountryPage'

export default function USA() {
  return (
    <CountryPage
      name="USA"
      flag="🇺🇸"
      flagCode="us"
      heroImage="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1920&q=80"
      overviewImage="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&q=80"
      tagline="Access the world's top-ranked universities with our comprehensive 5-application package."
      overview="The United States is home to the highest concentration of world-ranked universities — including Harvard, MIT, Stanford, and hundreds of other exceptional institutions. An American degree opens doors globally across every industry. Our USA package includes applications to 5 universities to maximize your acceptance chances, along with complete F-1 student visa support from initial preparation through final approval — with payment structured around your success."
      services={[
        { label: '5 University Applications',      desc: 'We prepare and submit applications to 5 universities on your behalf' },
        { label: 'Visa Preparation (Initial)',      desc: 'I-20 guidance, SEVIS fee support, DS-160 preparation, and embassy scheduling' },
        { label: 'Visa Interview Coaching',         desc: 'Full preparation sessions for your F-1 visa consulate interview' },
        { label: 'Post-Approval Visa Support',      desc: 'Paid only after visa approval — full process completion guaranteed' },
      ]}
      notes={[
        'Initial visa support fee of $100 is paid upfront. The remaining $900 is due only after your F-1 visa is approved.',
      ]}
      pricing={[
        { label: 'Admission (5 University Applications)', value: '$550' },
        { label: 'Visa Support — Initial',               value: '$100' },
        { label: 'Visa Support — After Approval',        value: '$900' },
        { label: 'Total (Admission + Full Visa)',         value: '$1,550', total: true },
      ]}
      requirements={[
        'Valid Passport',
        'CV / Resume',
        'Academic Transcripts',
        'Statement of Purpose / Motivational Letter',
        'Reference Letters (2–3)',
        'SAT/ACT Scores (if applicable)',
        'Language Certificate (TOEFL/IELTS)',
        'Financial Sponsorship Documents',
      ]}
    />
  )
}
