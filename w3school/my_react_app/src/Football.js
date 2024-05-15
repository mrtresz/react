function Football() {
    const shoot = (a, b) => {
        alert(b.type)
    }

    return (
        <button onMouseOver={(event) => shoot("Goal!", event)}>Take the shot</button>
    )
}

export default Football;