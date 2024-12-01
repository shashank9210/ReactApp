export default function CoreConcept(props) {
    return (
      <li>
      <img src={props.img} alt ="componentImage" />
      <h3>{props.tile}</h3>
      <p>{props.descrtion}</p>
    </li>
    )
  }