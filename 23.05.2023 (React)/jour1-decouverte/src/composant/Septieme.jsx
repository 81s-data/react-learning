const Septieme = () => {
    const products = [
        {title : "iPhone 9", price : 549 , stock : 94},
        {title : "iPhone 10", price : 1000 , stock : 60},
        {title : "Nokia", price : 50 , stock : 20},
    ]
    return<div>
        <h1 className="fs-3">produits disponibles dont le stock est supérieur à 50</h1>
        {/* {tab && tab.filter(item => {
            return item.stock > 50;
        }).map((item, key) => {
            return <p key={key}>{item.title} - {item.price}</p>;
        })} */}

        {/* sans filter */}
        {products && products.map((item, key) => {
            return <p key={key}>{item.stock > 50 && `${item.title} - ${item.price} €`}</p>
        })}
    </div>
}
export default Septieme;