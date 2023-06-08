import Nav from './components/Nav';
import Search from './components/Search';
import Footer from './components/Footer';
import banner2 from './assets/img/banner2.png';
import banner3 from './assets/img/banner3.png';

function App() {

  return (
    <div className="main">
      <Nav />
      <div className="container mt-5">
        <Search />
        <section>
          <h2 className='text-center'>
            Compra tus boletos en Ay Van! y disfruta del viaje
          </h2>
          <span className='text-center'>
            <strong>¡Viajar nunca había sido tan fácil! </strong> Descubre nuestra plataforma de venta de boletos de autobuses y 
            disfruta de la forma más conveniente y cómoda de planificar tus viajes.
            Con nuestra plataforma, podrás encontrar y reservar tus boletos de autobús en tan solo unos clics. 
            Olvídate de las largas filas y las complicaciones de comprar boletos en la terminal. 
            Desde la comodidad de tu hogar, oficina o cualquier lugar donde te encuentres, 
            tendrás acceso a una amplia selección de destinos, horarios y compañías de autobuses.
          </span>
          <div className="row mt-3">
            <div className="col-lg-6">
              <img className='img-fluid rounded' src={banner2} alt="" />
            </div>
            <div className="col-lg-6">
              <img className='img-fluid rounded' src={banner3} alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="d-flex justify-content-center">
            <div className="item text-center">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAADp0lEQVR4nO2ZXahUVRTHdxIza83cq6hooNcgQ30KQ+hJ5D7Ug/qghAzdZq25ke+9CJaKNVSgXvSsdcYRffFB0PJBerCioBBBHywoSRADwY+IihTsQ5L8vLLn4965o/Nx5pwzZx72H9YwHM7Ze/3OXmvtj2OMk5OTk5OTk5OTk9NAKcPeSmDdjiyfIum3wPo9kF5EkmvAcqtuSHIPWSetNVy7iqxXgPQ8sPwArCeAZEea979gBk3pvCxF0lN1iIjtPrIeMZsnhs0gCAreKLL8ExPstJFcQiqNJAqbIl1RCce4YafCX8+ZXDGVDG2umALWH/sFO23yYSK8SLKr/7CV0P4/9aa/rK+wkJfVyPLgqWFH+iew7szk9WXDe7MzX1JpBFi+Ch/acrJ/tJsnhu300SLHTnSqpvDGviVRjHQmr+v6woskh1vCmslnOj0fFTCyXDbvlNIxw+qGVmHczTxpYYH066jyGUi2xQab5b0LLViL0d054+ZcMYWkE8D6e7xFTG7HNjcDy8mW+cTeysZ7kWRPvKANRno8GsJicVaqsG85sDfWKm/r1hzOwPJboNBk/RLHvcVQ8J9H0mPBQ1s/B9b3gGSNyXnYGW60+Gw2770EJG8Bq4+sZ5D03247DAvcHJa2VvScDiT3apuWLSZ3YGi6VSrNBtKtQPIdst4JE1aVObfRYdbdQZ5/2hjMznnzkOVoGL+A9LxtxwwXyvOB5EJUeQQk7z9RtFh3dzvS7YIP87IRSP/o2TdW3wBJOSrYGvANGzEmJtVG+3SP/l23VfSXKIFr0J/ZQhcXdHq89GJvvskjY3+iBq5Dz83tmRMHcJgVmokDtiFnbgLpBxmSVTOrZDjYMCs0EyfwIJpJ2gEHzG6EJ/sd0neB5V0cKy+yZtep9lqCYRnKHwMkf7W7wTb4RKUk2ZYUcBh/gOVXu7j/ou2NY+VFzR1U3m5SIxzCHyA9ZOxiv7J5DtLBuLd4oIC78+dne3BRfYD8V5DkbLdHJ9VvRgmFdHB/riDJx5WdUrPsJh9ZP2l64G4lR2zY2I15tfFki1Ynf0i+AfK5qyOfobdLC4J8MrHbvjn5g3NNTLJtBzlEsL5bhkCdIHmvI+nDbt52hr21JmZlCt76xs+qrU0eWN976gTZ3wSsf7d7k2nyXzV9Urogr7WLvKqv/qZQnWTH/OeQ9SMg/QlJ/rNm/9u5MK6tXzvZPm3+Vk5oGvyxPk5VYCcnJycnJycnJycnJycTXI8ByXXWje8chksAAAAASUVORK5CYII=" />
              <br />
              <span>Aire acondicionado</span>
            </div>
            <div className="item text-center">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFiUlEQVR4nNWaeYhVVRjAr2bvnu+OaUbZIhntC9FCC1GULUgQRRE9dO733Rm01DKsiIpWn5BENnO/7z4tw5TClIpKFP8IEoqwlfa0oixbJKlo0cwszZmJc98yL+ee9+7y3jh+cOBx59xzzu9853zbHctqgThe95mKJFDI6wFlm276tyIW/TdrqMuY/MOjAeVJIO4Fkr7oxr2AvMTC4ihrKErb5OBQhfKhGeD/TZF80EZdY60hJRMKI4DkjbgQVRjkd6zpi/a3hooo5AeSQtTA3GsNlXuhkLekBiHZOrpTDtzbHBagzEgLUWmOK9OauiibgokK+cIk7yjklVlBFPKKpkE4xNMBeRcQ/+G4xbPivgfI32QFAZSvshPMKtqA/NQe5/aXnCcnxwOR7U0A2Z6ZA1CeNkywSXnB+EEBIf4zM0gbdY0FlC9NKnc6HzmsLgjJxiaAbLCaIcoLxgPy94aL+Mlod+GYFl/2F61mSQ6Lp+i7YZhsrZX3YZ8xv44rZxidG/IabRgGvITFUYr49wza2NISh6g8fwKQ7DCc5WesQmH4gHdI7s8AcrfVKrEpmAjI/0RPLI9HBo3Ir6cAWavftVopypVJQLzbcMweirJ+OjSPrQni9wctjHdcmWZKkhTKndH3RRYDSo8RAqVHET9hTZ13gDWYoojvMNyXXgf5BrPREFYk63TIo1v5t++Qf7q1twSI5xp315VJ1r4kCnmB4bjsdDy5vHpPUD7W5jg0yTVHTJvZspn+TjtZhbJKFyOA5Ka4cV2TpG8YIC81aGa7ouL5ulfO6z5Bofyc2AwTb1bIC3Pt3SdZLZcJhRGmkETvdltHcFpNOWhrKt+C0qNQVutIoyUMNsrFNWH/GoMl+9Em/zjdTSdogPxXWkcJJDsBeVZTIQD5wfJu3RY+oK42QH7L4GO+hQ5/nO7meP4VpWQtNUyfQpndFAgbg8v6fQn32ihT9XMdEeuLbTDNn41s7z5Y91PkT67rV2IcNZv40swguva0xyJ3A/J1laKcKZdRxO9WnB54fGMmrRB/lAki1x4c38jkhrkMySZDv1etzoIqaUbuyQKTQzkxizY66wy+Q7lyke6nL7i+6IYzvroSGALKvAxawdQgOjisP0F/xUWbXkXym+GcLy+F/33DFMqilCCFLBpZ0XiC/ooLoH+eLiQY+j0WDlooDAfi55LD8LIMIPJpzIk2KbfrqEa5DKDMCQfOF3JA8nIyjcjb6Sj0zpkWFL1jGyoVF/Dk2jq5zK01vujN2CAoP6TicJAPT36OZd2ovH9QqE2PvWj/wb02Bdf3F8BjflNB6Un1CQI8PjvVpdTfPPKPjgzHIL7ZoL3d4AV53WfklOIhQPxFrLG9xgXDgSAk16QBKe/eK1X/gTK7oS+a1H2kqa4GtSAuX5AcBP2ZqUFKmllZ9R8k3QbgbdDun1utqyH/Wh8kRRLX2IfEMgDLGvkPnXDp1Lg0Z3BOCGe+8LenAYlOopJqptZ/oDwb3Yc32zT/aN3Ndv1LAOVvgwa7koMktPMNNDM3HDRfyCnil6IXyV9rSxnO7fLVQPJvBMjyxCA6r24eSLjrd5VgfACU1wzHbH3VfGNAA8y3NiKJQYh/aiZI6R8FZEa1/oXyXmLzjfx5MoowHopQbdZWysfb9RQ68dIJWCPzDShzau7b1kQcJSfVZIj+Xd3luMGV4SI7/HGmb5AKZVWU+bamL3Jig7RRcGrLQEptR6WYYXcUj9VWywC9VJvucilqiX5mu3xMbBCdI7cYJMxltN+obJzJGSqS+eGi8s/vp0heSOTdw4JBy0HKuUy5fqU9PBicoUK5L1xYZ0El0giQ3DIYICUY3lxZnF3XGfozYwNUQWosxSC1jTB5wRGlTeSromthOvz3p5gW/R/togLv/vZFOAAAAABJRU5ErkJggg==" />
              <br />
              <span>Cinturon de seguridad</span>
            </div>
            <div className="item text-center">
              <img src="data:image/png;base64,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" />
              <br />
              <span>Comodidad</span>
            </div>
            <div className="item text-center">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD+UlEQVR4nO1ZzWtcVRS/aXXeOS9tY62U2lI/ClJx4X8g2oVaNwrCYDPnTEaqzUoXoijoYnTXNjPnTBIRghsRXJjYWmip4kJBC0VaqlZQaAutUPEL6kZsa0xGzjWVSfJm5s1X3gTfDw487rsfv9/cez7eHedSpEiRIsXqRHUgQ+P3BVx5BkkPAMkhYD2LrJeA5QqS/GXmn32bnrU+SLI/IN1rY22ORKhvzO4fClifBtbDQPIrslY7MZtj4QcYcTS+oecCApJHgOQDJL3aKfkG9iewzgRcebi77B8s3gQsBCxf9ZB8nZ3SM0A67LLTazvSEOTKu4Dkm5UWgMvt+5DLu1sWEJLc7h0yeQHVRTvEOmPc4onI66NA+lPSpLG+mN+Q9PHGvkAyiSzzSZPFpibzwDphnBeL2HtgPZB+1PbEpHPmSzZ5mNN9AelDAU/cPZR7a6MbnbrZzJ6tzd5ZH+vr/Y90rv3dkePGvcYf9Ew75JHlMyO1Pj+5ybWJdcOl20KWUZsL2xBl3L3fAMmHLQq4CqRTGdKdrsvIkO4E1reR5FqLYo64QR7bjCTfxdzKo0FB73I9Bo6UtyHpu7H8lfT8f5EMniptR5KLDQZcsrPdaPEN2fKtmJMnkLVkZ9cWWF5ryTn/jrVkfb0PNcljSPJDfRFy0bgvGSQ7gPRyxID3hwp6S+RK2WIGqMJA8jGyzrbhsLMmzCoHm8tFwNa2/BFxnC4b50hemeHSvcDyc822vR5ZmT4/HkCu/CKw/Nh2pIsghiwvRAuqDiDLGzV9fzGujXbTDY5U7reOVpZHvQ9z+pgdm24JWG5yrl45YmW/cTOOLhZuxOZaZMsIpG+uTMKUeUvOrlCEWNziwvIEsp7ovQBdEiX1S4uqrhuwbNzbo9TESC4Yh46FWBGJrNcTE8J63Th0ZVcwr0/GC6/yN5J8ASwvA8kDmeHKPY7HBs3s2dqA9RXr4/s2FzFra7tuwmJ93VqI5BqQjIeFg1vizudrPNaJurtNOufzSy8Qkjy7NGpZ1Qz5yh3tzgm5sTsXEuqiqGVruV4CufLcjcXsSqfj72mP6sC/R079jgPLS24l4H0gL/l6JYUlU7sq8tGO9I8FO29t9q5eyQN5ydvcLlFY2UL6GpD83jw/yBUgedXGuH4C7pncCqwnW094ctp8xPWNCIqsmuOJsbF7JrcmrcN5RyWd6iDhveOKxTWuL1AsrkHW91o/Wjqz/CYkaWSn1yLJdAtH6oi/YelLZIsZYD3WVAjJJ5Elel8hW0Zk/bSBkBO+/loVGJ0KkfXzCJ842dGHUVJ/BgHpqRqf+LrZrUnfwt+A+P845Fu7UXSrGWHh4JZWyvsUKVKk+H/gH1YYUaQrte6YAAAAAElFTkSuQmCC" />
              <br />
              <span>Wifi</span>
            </div>
            <div className="item text-center">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAe0lEQVR4nO3SwQ3CMBAF0T0hTYGc4l7oIOmJFAHdQBNO/G3Nk7aAr9kqSdIItOO3wtVyQ2pSOCQMFgmDRcJgkTBYJAwWCYNFwmCRMFgkDBYJg0XCYJEwWCQMyxZh8qtlhmhKz9eDtn9vf5ltPy8YcnwG/P677xBJUvX1B0Dg1iSd7tAoAAAAAElFTkSuQmCC" />
              <br />
              <span>Entretenimiento</span>
            </div>
            <div className="item text-center">
              <img src="data:image/png;base64,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" />
              <br />
              <span>Baño</span>
            </div>
          </div>
        </section>
        <section>
          <h2 className='text-center'>Servicios adicionales</h2>
          <span>
            <strong className='text-center'>
              ¡Prepara tus maletas y comienza tu aventura con nosotros!
            </strong>
              Nuestra plataforma de venta de boletos de autobuses está lista para llevarte a tu próximo destino.
          </span>
        </section>
      </div>
      <Footer />
    </div>
  )

}

export default App;