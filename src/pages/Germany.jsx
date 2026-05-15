import CountryPage from '../components/CountryPage'

export default function Germany() {
  return (
    <CountryPage
      name="Germany"
      flag="🇩🇪"
      flagCode="de"
      heroImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80"
      overviewImage="https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=900&q=80"
      tagline="Tuition-free public universities and world-leading engineering, research, and technology programs."
      overview="Germany is one of the top study destinations globally, renowned for its engineering, technology, and business programs. Most public universities in Germany charge little to no tuition fees — even for international students — making it an extraordinarily cost-effective option for quality education. With a thriving economy, strong demand for international talent, and clear post-study work pathways, Germany is a premier destination for driven, career-focused students."
      services={[
        { label: 'University Admission', desc: 'Applications to German public universities and private institutions' },
        { label: 'Visa Application',     desc: 'German student visa guidance, blocked account advice, and embassy prep' },
      ]}
      notes={[]}
      pricing={[
        { label: 'University Admission',     value: 'Included' },
        { label: 'Visa Application Support', value: 'Included' },
        { label: 'Total Agency Fee',         value: '$650', total: true },
      ]}
      requirements={[
        'Valid Passport',
        'CV / Resume',
        'Academic Transcripts (translated)',
        'Motivational Letter',
        'Reference Letters',
        'Passport-size Photos',
        'Blocked Account Proof (€11,208/year)',
        'Language Certificate (IELTS/TOEFL for English programs)',
        'German Language Proof (if applicable)',
      ]}
    />
  )
}
