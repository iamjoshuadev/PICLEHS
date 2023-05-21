from flask import Flask, render_template #importando flask y render template

app = Flask(__name__)  #declarando el app para crear rutas


# rutas del proyecto
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/epmpresas')
def empres():
    return render_template('enmpresas/heredada2.html')

@app.route('/gx-desa')
def desarrolladores():
    return render_template('gx-desa/desarrolladores.html')

@app.errorhandler(404) #ruta error 404
def  page_not_found(e):
    return render_template("error404.html")

if __name__ == '__main__':
    app.run(debug=True, host="localhost", port=10)
