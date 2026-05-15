import CountryPage from '../components/CountryPage'

export default function Hungary() {
  return (
    <CountryPage
      name="Hungary"
      flag="🇭🇺"
      flagCode="hu"
      heroImage="https://images.unsplash.com/photo-1551867633-194f125bddfa?w=1920&q=80"
      overviewImage="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=900&q=80"
      tagline="Prestigious European universities with 100% scholarship opportunities and November intake."
      overview="Hungary is becoming a premier destination for international students seeking quality education in central Europe. With its historic universities, affordable living costs, and growing number of English-taught programs, Hungary offers exceptional value. The Stipendium Hungaricum scholarship program offers fully-funded scholarships to eligible international students — covering tuition, accommodation, and a monthly stipend. Applications open in November — start preparing now."
      badge="Opening November Intake"
      services={[
        { label: 'University Admission',          desc: 'Applications to leading Hungarian universities and programs' },
        { label: 'Visa Application',              desc: 'Hungarian student visa guidance and documentation support' },
        { label: '100% Scholarship Application',  desc: 'Stipendium Hungaricum or equivalent fully-funded scholarship application' },
      ]}
      notes={[
        'Scholarship availability depends on eligibility criteria and university-specific quotas.',
        'Applications open in November — contact us now to prepare your documents well in advance.',
        'Standard (non-scholarship) package available for $500.',
      ]}
      pricing={[
        { label: 'With 100% Scholarship (full package)',    value: '$1,000' },
        { label: 'Without Scholarship (standard package)',  value: '$500' },
        { label: 'University Admission',                    value: 'Included' },
        { label: 'Visa Application Support',                value: 'Included' },
        { label: 'Total (Scholarship Package)',             value: '$1,000', total: true },
      ]}
      requirements={[
        'Valid Passport',
        'CV / Resume',
        'Academic Transcripts',
        'Motivational Letter',
        'Reference Letters',
        'Language Certificate (IELTS/TOEFL/equivalent)',
        'Passport-size Photos',
        'Medical Certificate',
      ]}
    />
  )
}
