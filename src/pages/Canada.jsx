import CountryPage from '../components/CountryPage'

export default function Canada() {
  return (
    <CountryPage
      name="Canada"
      flag="🇨🇦"
      heroImage="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=80"
      overviewImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80"
      tagline="Full-service package covering admission, visa processing, and initial settlement support."
      overview="Canada consistently ranks among the top countries for international students thanks to its world-class universities, diverse and welcoming culture, and clear pathways to permanent residency after graduation. Cities like Toronto, Vancouver, and Montreal are vibrant, cosmopolitan hubs with thriving student communities. Our Canada package is the most comprehensive we offer — covering everything from admission through your initial settlement period after arrival."
      services={[
        { label: 'University / College Admission',    desc: 'Applications to Canadian universities and colleges' },
        { label: 'Initial Visa Support',              desc: 'Study permit preparation, document review, and initial submission' },
        { label: 'Post-Acceptance Visa Processing',   desc: 'Full study permit application after receiving your acceptance letter' },
        { label: 'Welcome & Settlement Support',      desc: 'Arrival guidance and orientation during your initial period in Canada' },
      ]}
      notes={[
        'Initial visa fee of $100 is paid upfront. The remaining $1,400 is due after receiving your acceptance letter.',
      ]}
      pricing={[
        { label: 'University Admission',               value: '$500' },
        { label: 'Visa Support — Initial',             value: '$100' },
        { label: 'Visa Support — After Acceptance',    value: '$1,400' },
        { label: 'Settlement Support',                 value: 'Included' },
        { label: 'Total Package',                      value: '$2,000', total: true },
      ]}
      requirements={[
        'Valid Passport',
        'CV / Resume',
        'Academic Transcripts',
        'Motivational Letter',
        'Reference Letters',
        'English Proficiency (IELTS/TOEFL)',
        'Proof of Financial Support',
        'Medical Exam (if required)',
      ]}
    />
  )
}
