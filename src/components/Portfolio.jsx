import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const Portfolio = () => {
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";
  const textStyle = {
    fontFamily: "Fira Code, monospace",
  };
  return (
    <>
      <section id="portfolio" className="pt-10 pb-10 ">
        <div className="container items-center mx-auto bg-gray-200 rounded-md">
          <div className="w-full px-4 pt-4">
            <div className="max-w-xl mx-auto mb-10 text-center">
              <h1
                className="mt-4 text-xl font-bold text-black"
                style={textStyle}
              >
                Portfolio
              </h1>
              <h1 className="text-xl font-bold text-black" style={textStyle}>
                Project Iseng
              </h1>
              <p className="pt-2 text-xs text-gray-600" style={textStyle}>
              This project was created to fulfill my passion in learning programming, hopefully it will be useful.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center w-full px-4">
            <div className="pt-2 m-2 mb-12">
              <Card className="w-full max-w-sm mt-6">
                <CardHeader color="blue-gray" className="relative h-90">
                  <img
                    src={`${publicUrl}/p1.png`}
                    alt="card-image"
                    height={"100%"}
                    className="duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Simple React + Vite film menggunakan API TMDB
                  </Typography>
                  <Typography>
                    Aplikasi super simple ini dibangun menggunakan vite + react
                    dengan tailwind css serta pengambilan datanya menggunakan
                    API dari TMDB
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>
                    {" "}
                    <a
                      href="https://github.com/redhocode/react-vite-app-film-API"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rean more
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="pt-2 m-2 mb-12">
              <Card className="w-full max-w-sm mt-6">
                <CardHeader color="blue-gray" className="relative h-90">
                  <img
                    src={`${publicUrl}/p2.png`}
                    alt="card-image"
                    height={"100%"}
                    className="duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Flutter CRUDS+Firebase : member_jkt48
                  </Typography>
                  <Typography>
                    Aplikasi ini digunakan untuk pencatatan data member jkt48
                    yang datanya disimpan di database firebase yang mana
                    firebase itu real time
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>
                    {" "}
                    <a
                      href="https://github.com/redhocode/CRUDS-Firebase-flutter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rean more
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="pt-2 m-2 mb-12">
              <Card className="w-full max-w-sm mt-6">
                <CardHeader color="blue-gray" className="relative h-90">
                  <img
                    src={`${publicUrl}/p3.png`}
                    alt="card-image"
                    height={"100%"}
                    className="duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    flutter_rest_api_php
                  </Typography>
                  <Typography>
                    A new Flutter project CRUD Rest API (web Service). CRUD
                    Member JKT48
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>
                    {" "}
                    <a
                      href="https://github.com/redhocode/flutter_crud_rest_api"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rean more
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
