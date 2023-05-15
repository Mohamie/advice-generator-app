import patternDesktop from '../assets/pattern-divider-desktop.svg'
import patternMobile from '../assets/pattern-divider-mobile.svg'
import dice from '../assets/icon-dice.svg'

type AdviceComponent = Advice & {
    generateNewAdvice: () => void
}


const AdviceCard = (props: AdviceComponent) => {
    return <div className="card">
        <h1 className="number">ADVICE #{props.id}</h1>
        <p className="description">{props.description}</p>
        <picture>
            <source media="(max-width: 767px)" srcSet={patternMobile} />
            <source media="(min-width: 768px)" srcSet={patternDesktop} />
            <img src={patternMobile} />
        </picture>

        <div className="dice_wrapper" onClick={props.generateNewAdvice}>
            <img className="dice" src={dice} />
        </div>
    </div>
}

export default AdviceCard;