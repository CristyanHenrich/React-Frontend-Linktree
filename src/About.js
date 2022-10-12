export function About(props) {
    return (
      <div class="about">
        <h1>
            {props.name}
        </h1>
        <h3>
            {props.about}
        </h3>
      </div>
    );
  }