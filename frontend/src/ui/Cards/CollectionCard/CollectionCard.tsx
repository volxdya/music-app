import './CollectionCard.scss';

export function CollectionCard() {
    return (
        <div className="collection-card d-flex justify-content-center align-items-center">
            <div>
                <h5 className="text-center">Летняя</h5>
                <img
                    src="https://i.pinimg.com/564x/d7/ca/df/d7cadf7cdc468b715f19705921f634d9.jpg"
                    alt="Картинка карточки подбора"
                    className="collection-img mt-3"
                />
            </div>
        </div>
    );
}