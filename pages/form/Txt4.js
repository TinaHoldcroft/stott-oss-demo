import Link from 'next/link';

export default function Step4({ currentStep, name, address, zip, city, telephone, email, frequency, amount, deduction }) {
    
    if (currentStep !== 4) { return null }
    
    return (
        <div className='summary'>
            <h1>Oppsummering</h1>
            <div>
                <p>{name} <i>&#60;{email}&#62;</i></p>
                <p>{amount} kr {frequency}</p>
                <p>{telephone}</p>
                <p>{address} </p>
                <p>{zip} {city}</p>
                <p>Fradrag: {deduction}</p>
            </div>
            <h2>Lurer du på noe?</h2>
            <p>Kontakt giverservice på <Link href='tel:+4723000600'>23 00 06 00</Link> eller send mail til <Link href='mailto:giver@blindeforbundet.no'>giver@blindeforbundet.no</Link></p>
        </div>
    )
}