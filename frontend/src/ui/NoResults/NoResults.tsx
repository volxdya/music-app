import {NoSearch} from "@/icons/NoSearch.tsx";

export function NoResults() {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div>
                <div className="d-flex justify-content-center">
                    <NoSearch/>
                </div>
                <h2 className="fs-3 mt-4 text-center font-medium">Ничего не нашли</h2>
                <p className="mt-3 text-[16px] text-center text-neutral-500 font-medium">Попробуйте написать
                    по-другому</p>
            </div>
        </div>
    );
}