import { useRouter } from 'next/router'

const AboutItem = () => {

    const router = useRouter()
    const { slug } = router.query

    return (
        <div>Página de {slug}</div>
    )
}

export default AboutItem;