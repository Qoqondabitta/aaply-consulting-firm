import CountryPage from '../components/CountryPage'

export default function Poland() {
  return (
    <CountryPage
      name="Poland"
      flag="🇵🇱"
      heroImage="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1920&q=80"
      overviewImage="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=900&q=80"
      tagline="Affordable European education with a growing job market, vibrant culture, and modern cities."
      overview="Poland is rapidly becoming one of Europe's most attractive study destinations. With world-class universities, affordable living costs, and a booming economy, students from around the world are choosing Poland for quality education without breaking the bank. English-taught programs are widely available across medicine, engineering, business, and the humanities. Poland's central location in Europe also makes it easy to travel the continent during your studies."
      services={[
        { label: 'University Admission', desc: 'Full application management to top Polish universities' },
        { label: 'Visa Application',     desc: 'Complete student visa guidance, documentation, and submission' },
        { label: 'Job Assistance',       desc: 'Help finding part-time work opportunities while studying' },
        { label: 'Apartment Assistance', desc: 'Support locating suitable housing upon arrival in Poland' },
      ]}
      notes={[
        'Job assistance is provided as best-effort guidance — employment is not guaranteed.',
        'Apartment assistance is provided as guidance — specific housing outcomes are not guaranteed.',
        'Tip: Learning basic Polish after arrival significantly improves your experience and job prospects.',
      ]}
      pricing={[
        { label: 'University Admission',     value: 'Included' },
        { label: 'Visa Application Support', value: 'Included' },
        { label: 'Job Assistance',           value: 'Included' },
        { label: 'Apartment Assistance',     value: 'Included' },
        { label: 'Total Agency Fee',         value: '$750', total: true },
      ]}
      requirements={[
        'Valid Passport',
        'CV / Resume',
        'Academic Transcripts',
        'Motivational Letter',
        'Reference Letters',
        'Passport-size Photos',
        'Language Certificate (IELTS/TOEFL)',
        'Bank Statement (for visa)',
        'Health Insurance',
      ]}
    />
  )
}
