import React from "react"
import "./style.css"
/**const ProductInfo = () => {

  
  const [quantity,setquantity] = useState(1);
  const [index, setIndex] = useState(0);
  const { productId } = useParams()

  const [product, setProduct] = useState([])
  const [img, setImg] = useState([])

  useEffect(() => {
    getProduct();
    getImages();
  },[])

  const getProduct = () => {
    let isMounted = true;
    axios.get(`http://localhost:8080/api/products/${productId}`)
    .then((response) => {
      if(isMounted){
        console.log(response)
        setProduct(response.data.product);
      }
      
    })
    return () => {
      isMounted = false;
    }
  }
  console.log(productId)
  const getImages = () => {
    axios.get(`http://localhost:8080/api/images/${productId}`)
      .then((res) => {
        setImg(res.data.images)
        console.log(res)
      })
  }

  const dispatch = useDispatch()
 */
const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  //ögelerin toplamını hesaplama..
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  //  ürün miktarı toplamı
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>Şu anda favorilerde ürün bulunmamaktadır. Hadi favorilerinize biraz ürün ekleyin.</h1>}


            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ₺{item.price}.00 * {item.qty}
                      <span>₺{productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>

                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Deepo favorilerindeki ürün fiyatı toplamı <br /> Toplam Tutar:</h2>
            <div className=' d_flex'>
              <h4>Toplam Fiyat :</h4>
              <h3>₺{totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart