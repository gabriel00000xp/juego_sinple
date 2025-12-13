# Mi Juego Simple en Python

## Descripción

Este es un proyecto de Django que implementa un juego simple desarrollado en Python. El propósito principal es demostrar conocimientos básicos en el desarrollo web con Django, incluyendo la creación de modelos, vistas, plantillas y administración.

El juego permite a los usuarios navegar por páginas de inicio, acerca de y jugar, con un sistema básico de puntuación almacenado en la base de datos.

## Características

- **Página de Inicio**: Bienvenida y descripción del juego.
- **Página Acerca de**: Información sobre el juego y desarrolladores.
- **Página Jugar**: Interfaz para jugar (a implementar según la lógica del juego).
- **Administración**: Panel de admin de Django para gestionar jugadores y puntuaciones.
- **Sistema de Puntuación**: Modelo `Player` con campos `name` y `score`.
- **Navegación**: Menú de navegación consistente en todas las páginas.
- **Estilos**: Enlace a CSS (a crear en `game/static/css/styles.css`).

## Tecnologías Utilizadas

- **Python 3.13**
- **Django 6.0**
- **SQLite** (base de datos por defecto)
- **HTML/CSS** (para plantillas)
- **Git** (control de versiones)

## Instalación

### Prerrequisitos

- Python 3.13 instalado.
- Git instalado.

### Pasos de Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/gabriel00000xp/juego_sinple.git
   cd new_projet
   ```

2. **Crea un entorno virtual:**
   ```bash
   python -m venv .venv
   ```

3. **Activa el entorno virtual:**
   - En Windows:
     ```bash
     .venv\Scripts\activate
     ```
   - En macOS/Linux:
     ```bash
     source .venv/bin/activate
     ```

4. **Instala las dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Realiza las migraciones de la base de datos:**
   ```bash
   python manage.py migrate
   ```

6. **Crea un superusuario para el admin (opcional):**
   ```bash
   python manage.py createsuperuser
   ```

## Uso

### Ejecutar el Servidor de Desarrollo

```bash
python manage.py runserver
```

Accede a `http://127.0.0.1:8000/` en tu navegador.

### Páginas Disponibles

- **Inicio**: `http://127.0.0.1:8000/`
- **Acerca de**: `http://127.0.0.1:8000/about/`
- **Jugar**: `http://127.0.0.1:8000/play/`
- **Admin**: `http://127.0.0.1:8000/admin/` (requiere superusuario)

### Agregar Jugadores y Puntuaciones

- Usa el panel de admin para crear instancias de `Player`.
- O implementa formularios en las vistas para registro de usuarios y puntuaciones.

## Estructura del Proyecto

```
new_projet/
├── django_project/          # Configuración principal de Django
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py          # Configuraciones (DEBUG, INSTALLED_APPS, etc.)
│   ├── urls.py              # URLs principales
│   └── wsgi.py
├── game/                    # Aplicación Django
│   ├── __init__.py
│   ├── admin.py             # Registro de modelos en admin
│   ├── apps.py
│   ├── migrations/          # Migraciones de base de datos
│   ├── models.py            # Modelo Player
│   ├── tests.py
│   ├── urls.py              # URLs de la app
│   └── views.py             # Vistas (home, about, play)
├── templates/               # Plantillas HTML
│   ├── _base.html           # Plantilla base
│   ├── home.html            # Página de inicio
│   ├── about.html           # Página acerca de
│   └── play.html            # Página jugar
├── static/                  # Archivos estáticos (CSS, JS, imágenes)
│   └── css/
│       └── styles.css       # Estilos (a crear)
├── db.sqlite3               # Base de datos
├── manage.py                # Script de gestión de Django
├── requirements.txt         # Dependencias
├── .gitignore               # Archivos ignorados por Git
└── README.md                # Este archivo
```

## Modelos

### Player

- **name**: CharField (máximo 100 caracteres) - Nombre del jugador.
- **score**: IntegerField (por defecto 0) - Puntuación del jugador.

Registrado en `admin.py` con una clase `PlayerAdmin` que muestra `name` y `score` en la lista, y permite búsqueda por `name`.

## Vistas

- **home(request)**: Renderiza `home.html`.
- **about(request)**: Renderiza `about.html`.
- **play(request)**: Renderiza `play.html`.

Todas en `game/views.py`.

## URLs

En `django_project/urls.py`:
- Incluye `game.urls`

En `game/urls.py`:
- `''` -> home (name='home')
- `'about/'` -> about (name='about')
- `'play/'` -> play (name='play')

## Plantillas

- **`_base.html`**: Plantilla base con navegación, título y bloques `title`, `content`, `extra_head`.
- **`home.html`**: Extiende `_base.html`, sobrescribe `title` y `content` con bienvenida.
- **`about.html`**: Extiende `_base.html`, sobrescribe `title` y `content` con información del juego.
- **`play.html`**: Extiende `_base.html`, sobrescribe `title` y `content` con interfaz de juego (placeholder).

## Configuraciones Importantes

- **DEBUG**: True en desarrollo.
- **INSTALLED_APPS**: Incluye 'game'.
- **TEMPLATES**: Directorios incluyen 'templates/'.
- **STATIC_URL**: '/static/'.

## Contribuir

1. Haz un fork del proyecto.
2. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`.
3. Haz commits: `git commit -m 'Agrega nueva funcionalidad'`.
4. Push a la rama: `git push origin feature/nueva-funcionalidad`.
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## Notas Adicionales

- El CSS en `static/css/styles.css` no está creado; puedes agregarlo para estilos personalizados.
- La lógica del juego en `play.html` es un placeholder; implementa la lógica en JavaScript o Python según sea necesario.
- Para producción, configura `DEBUG=False`, agrega `ALLOWED_HOSTS`, y usa un servidor como Gunicorn.

Si tienes preguntas, contacta al desarrollador.