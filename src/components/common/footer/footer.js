import MainFooter from '@/components/common/footer/mainFooter';
import SubFooter from '@/components/common/footer/subFooter';
import Overlay from '@/components/common/overlay';

export default function Footer() {


    return (
        <>
            <Overlay />
            <footer className="flex flex-col w-full border-t-2 border-bleached">
                <MainFooter />
                <SubFooter />
            </footer>
        </>

    )
}