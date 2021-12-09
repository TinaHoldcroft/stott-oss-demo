import Link from 'next/link';

export default function TxtVipps(props) {
  if (props.currentStep !== 5) { return null }

  return (
    <div className="vipps-txt">
      <h1>Vipps faste betalinger</h1>
      <p>Betaler du din faste avtale med Vipps trekkes det beløpet du har valgt en gang i måneden via Vipps faste betalinger.</p>
      <p>Det er ingen bindingstid, så du kan når som helst si opp avtalen din ved å kontakte Giverservice på telefon: <Link href='tel:+4723000600'>23 00 06 00</Link>, eller på e-post: <Link href='mailto:giver@blindeforbundet.no'>giver@blindeforbundet.no</Link>.</p>
    </div>
  );
}