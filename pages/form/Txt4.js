import Link from 'next/link';
import { giverPhone, giverPhoneLink, giverEmail, giverEmailLink } from '../../components/ContactInformation'

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
            <p>Kontakt giverservice på <Link passHref href={giverPhoneLink}>{giverPhone}</Link> eller send mail til <Link passHref href={giverEmailLink}>{giverEmail}</Link></p>
        </div>
    )
}