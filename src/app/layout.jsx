import './globals.scss';
import Socials from './Components/Socials/Socials';
import ss from './page.module.scss';

export const metadata = {
    title: 'Coffeebara',
    description: 'The Friendliest Coffee Around!',
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <div className={ss.layoutContainer}>
                    <h1>Coffeebara</h1>
                    <p>At Capy Street - Auckland - 1212 </p>
                    {children}
                    <Socials />
                </div>
            </body>
        </html>
    );
}
