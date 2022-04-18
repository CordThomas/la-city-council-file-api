[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#relieson">Relies On</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

To support an interface in development for searching the LA City Council 
File System for information that is not readily available in the City's own system, 
developing an API to the city-council.db database created by a scrapping script written
last year for some offline analysis.

### Built With

This project was built with:

* [Node](https://www.crummy.com/software/BeautifulSoup/)
* [Express 4.0](https://expressjs.com/)
* [Swagger 2.0](https://swagger.io/)
* [sqlite](https://www.sqlite.org/index.html)

## Usage

The script is run as a node server

from within the script directory, run:

```node server.js```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Cord Thomas - [LinkedIn](https://www.linkedin.com/in/cordthomas/) - cord.thomas@gmail.com

Project Link: [https://github.com/CordThomas/la-city-council-extractor](https://github.com/CordThomas/la-city-council-extractor)

## Relies On

The API relies on a sqlite database with the ~50,000 City Council File records extracted since 2000.   This database is populated by the Python scripts in this project:  https://github.com/CordThomas/la-city-council-extractor

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/cordthomas/
