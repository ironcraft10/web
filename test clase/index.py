from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/acerca_de')
def acerca_de():
    return render_template('acerca_de.html')

@app.route('/comunidad')
def comunidad():
    return render_template('comunidad.html')

@app.route('/favoritos')
def favoritos():
    return render_template('favoritos.html')

if __name__ == '__main__':
    app.run(debug=True)
