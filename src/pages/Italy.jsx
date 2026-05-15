import CountryPage from '../components/CountryPage'

export default function Italy() {
  return (
    <CountryPage
      name="Italy"
      flag="🇮🇹"
      flagCode="it"
      heroImage="https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1920&q=80"
      overviewImage="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&q=80"
      tagline="Study in the birthplace of the Renaissance — world-class universities, art, and timeless culture."
      overview="Italy is home to some of the world's oldest and most respected universities, including the University of Bologna — founded in 1088. Students choose Italy for its outstanding programs in architecture, fashion, arts, engineering, and medicine. Many universities offer English-taught degrees with relatively low tuition compared to the UK or USA, making Italy a smart, culturally rich choice for ambitious international students seeking quality education in Europe."
      services={[
        { label: 'University Admission', desc: 'Application support to top Italian public and private universities' },
        { label: 'Visa Application',     desc: 'Student visa (Visto per Studio) guidance, document prep, and submission' },
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
        'Academic Transcripts',
        'Motivational Letter',
        'Reference Letters',
        'Passport-size Photos',
        'Language Certificate (IELTS/TOEFL/Italian B2)',
        'Proof of Financial Means',
        'Health Insurance',
      ]}
    />
  )
}
