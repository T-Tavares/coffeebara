import ss from './Gallery.module.scss';
import Image from 'next/image';

const ImagesLinks = [
    'https://images.unsplash.com/photo-1557431177-36141475c676',
    'https://images.unsplash.com/photo-1633123784883-9cc9ba6d8c9e',
    'https://images.unsplash.com/photo-1714622343884-7494d44b30fa',
    'https://images.unsplash.com/photo-1680994354810-aa25bbc69976',
    'https://images.unsplash.com/photo-1701772164869-dfb2cac483dc',
    'https://images.unsplash.com/photo-1683479452479-21a4f12672d2',
];

const Gallery = () => {
    return (
        <div className={ss.gallery}>
            {ImagesLinks.map(img => {
                const key = img.slice(-12);
                return (
                    <div key={key} className={ss.imageContainer}>
                        <Image src={img} alt={key} width={100} height={100}></Image>
                    </div>
                );
            })}
        </div>
    );
};

export default Gallery;
