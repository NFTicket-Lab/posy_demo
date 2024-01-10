import { useRouter } from "next/router";

function About() {
    const router = useRouter()
    let id = router.query.id;
    return (
        <div>
            About{id}
        </div>
    )
}


export default About