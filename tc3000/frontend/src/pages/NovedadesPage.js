import '../styles/NovedadesPage.css';
import react from 'react';
const NovedadesPage = (props) => {
    return(
        <main>
        <div className="holder">
            <div className="nono">
                <h2>Novedades</h2>
                <img src="img/lamborghini.png" height="200" alt=""/>
            </div>

            <div className="sentey">
                <h3>Top five del campeonato</h3>
            </div>
            <div id="main-container">

                <table>
                    <thead>
                        <tr>
                            <th>Piloto</th>
                            <th>Marca</th>
                            <th>Puntos</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Federico Fernandez</td>
                        <td>Ford</td>
                        <td>105</td>
                    </tr>
                    <tr>
                        <td>Francisco Castillo</td>
                        <td>Audi</td>
                        <td>99</td>
                    </tr>
                    <tr>
                        <td>Dario Garcia</td>
                        <td>Toyota</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>Flavio Duarte</td>
                        <td>Lamborghini</td>
                        <td>87</td>
                    </tr>
                    <tr>
                        <td>Matias Actis</td>
                        <td>Mercedes Benz</td>
                        <td>80</td>
                    </tr>
                </table>
            </div>
            <div className="novedades">
                <h3>Más marcas</h3>
                <h4>Se asoma una nueva marca a la categoría</h4>
                <p>Con el éxito que viene teniendo la categoría año tras año, nuevas marcas quieren incorporarse
                    a la misma.</p>

                <p> La nueva marca que quiere desembarcar en TC 3000 se trata ni más ni menos que de
                    "Chevrolet". La comisión directiva lo estuvo analizando y ya se está terminando de cerrar
                    todo para que el año que viene el Turismo Competición 3000 tenga 9 marcas y porque no muchas
                    más al largo plazo. </p>

                <p>Sin dudas la categoría no tiene techo y va por más.</p>

            </div>
            <div className="novedades">
                <h3>¿Nueva Motorización?</h3>
                <h4>Equipos piden cambios a futuro</h4>
                <p>En este 2022 la categoría cumple ya 10 años usando motores v6 fabricados por Oreste Berta.
                    Tanto dueños de equipos y la Comisión deportiva se han juntado para charlar sobre temas a
                    mejorar y el que más peso tuvo fue el de la motorización de los autos para los años
                    venideros.</p>
                <p>
                    Los equipos plantearon que el motor v6 ya se está quedando obsoleto y los costos para cada
                    carrera son muy altos, es por esto que se trataron distintas alternativas y la que pica en
                    punta para el reemplazo del motor actual es el Radical V8 fabricado en Brasil.
                </p>
                <p>
                    De ser así y concretar este cambio de motorización la categoría tendrá autos con más
                    potencia y los equipos podrán trabajar mejor para los suyos.

                </p>

            </div>





        </div>
    </main>

    );
}

export default NovedadesPage;