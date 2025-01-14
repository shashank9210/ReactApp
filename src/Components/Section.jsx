export default function Section({title,  children, ...proxy_props}) {
    return (
        <section {...proxy_props} >
            <h2>{title}</h2>
            {children}
        </section>
    )
}