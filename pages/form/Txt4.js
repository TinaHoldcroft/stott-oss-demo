import Link from 'next/link';

export default function Step4({ currentStep, navn, adresse, telefon, epost, frekvens, beløp, fradrag, fødselsnummer }) {
    if (currentStep !== 4) { return null }
    return (
      <div className="summary">
        <h1>Oppsummering</h1>
        <div>
          <p>{navn} <i>&#60;{epost}&#62;</i></p>
          <p>{beløp} {frekvens}</p>
          <p>{telefon}, {adresse} </p>
          <p>Fradrag: {fradrag}</p>
          <p>{fødselsnummer}</p>
        </div>
        <h2>Lurer du på noe?</h2>
        <p>Kontakt giverservice på <Link href='/'>23 00 06 00</Link> eller send mail til <Link href='/'>giver@blindeforbundet.no</Link></p>
      </div>
    )
  }
