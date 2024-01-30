export const PrincipalCard = ({title, children}) => (
    <div className="card">
        <div className="card-header text-center">
            <h5 className="p-0 m-0">{title}</h5>
        </div>
        <div className="card-body">
            <div className="d-flex flex-column gap-3">
                {children}
            </div>
        </div>
    </div>
)