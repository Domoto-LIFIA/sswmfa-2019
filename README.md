# sswmfa-2019
Investigación sobre Web Augmentation 

luego de los pasos clasicos: 

```Terminal
openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365
openssl rsa -in keytmp.pem -out key.pem
```

* Abrir https://localhost:3000 en Google Chrome y vas a ver que no abre correctamente.
* Expandir las opciones del chrome > Mas Herramientas > Herramientas del desarrollador > Seguridad > Ver certificado. 
* Expanda 'Confiar' y cambie 'Al usar este certificado' a 'Confiar siempre'. ESta opcion puede ser que no aparezca dado que desde el navegador si haces un refresh (F5) te va aparecer para aceptar el certificado.
* Reinicia navegador y sswmfa.

Ahora la nueva pagina va tener protocolo seguro (https) que va servir para la extesionAWS.

# MODIFICACIONES en "extensionIAW"

Ahora el POST que realiza la extension se debe realizar a la nueva pagina (https://localhost:3000), asi que se dee reemplazar http -> https en los siguientes archivos del proyecto: 

  * index.js
  * ServiceService.js
  * Sidebar.js
  * manifest.js

Por otro lado, la extension si ya la tenes en el navegador seguramente este precompilada y empaquetda en google, por lo que se debe hacer lo siguiente: 

  1) chrome://extensions
  2) presionar en detalles (de la aplicacion)
  3) Dentro de las opciones buscar "Opciones de extension" y abrira una solapa en el centro de la pantalla con dos URL. 
  4) modificar el http://localhost:3000 por https://localhost:3000

Cerrar todo y reiniciar. Ahora si la proxima vez que presiones un mas (si la aplicacion tiene ganas) deberia fu...no voy a quemar, probalo ;). 
