import './CircleCard.scss';

interface Props {
    title: string;
    otherText: string;
}

export function CircleCard({title, otherText}: Props) {
    return (
        <div className="circle-card">
            <div>
                <img
                    src="https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/15/46/60/79/60/9ad546240cd7.jpeg"
                    alt=""/>
            </div>
            <div className="mt-2 texts-circle-card">
                <div className="text-center title-text">
                    {title}
                </div>
                <div className="text-center other-text">
                    {otherText}
                </div>
            </div>
        </div>
    );
}