import { useSelector, useDispatch } from 'react-redux'; // updated
import { selectMobileMenuOpen, setMobileMenuOpen } from '@/store/slices/mobileMenuSlice'; //updated
import {useEffect, useRef} from "react";
import Image from "next/image";
import Link from 'next/link'
import fonts from '@/helpers/fonts'
import { useRouter } from 'next/router'

export default function MobileMenu() {

    const router            = useRouter();
    const dispatch          = useDispatch();
    const mobileMenuOpen    = useSelector(selectMobileMenuOpen); // updated
    const header            = useRef(null);

    useEffect(() => {

        header.current.style.transform = mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)';

    }, [mobileMenuOpen])

    useEffect(() => {

        router.events.on('routeChangeStart', () => {
            dispatch( setMobileMenuOpen(false) );
        })

    }, [dispatch, router.events])

    function closeMobileMenu(e) {
        e.preventDefault();
        dispatch( setMobileMenuOpen(false) );
    }

    return (
        <header className={`h-full w-[300px] bg-white`} ref={header}>




        </header>
    );
}
