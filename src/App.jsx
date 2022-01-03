import { useState, useEffect } from 'react';
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import './App.css';
import './fonts/fonts.css';
import axios from 'axios';
import { Container, Row, Col, Form, InputGroup, FormControl, ListGroup, Accordion, Card } from "react-bootstrap"
import ListOfIteams from './Components/ListOfIteams';
import StoryblokClient from 'storyblok-js-client'
import Arrow from './img/arrow-narrow.png'
import ArrowUP from './img/arrow-up.png'
import Instagram from './img/instagram.png'
import FB from './img/facebook.png'
import LI from './img/linkedin.png'
import Phone from './img/phone.png'
import Mail from './img/mail.png'
import Sort from './img/sort.png'
import Filter from './img/filter.png'
function App() {


  const [StoriesVisile, setStoriesVisile] = useState([])
  const [Stories, setStories] = useState([])
  const getStories = async () => {
    try {
      let response = await axios.get('https://api.storyblok.com/v1/cdn/stories/', {
        params: {
          "token": 'B3hmHF6Q9NWu6QAgnn3wpwtt',
          "starts_with": "angebote/"
        }
      });
      console.log(response.data.stories)
      setStories(response.data.stories)
      setStoriesVisile(response.data.stories)
    } catch (err) {
      console.log(err.response)
    }
  }
  useEffect(() => {
    getStories()
  }, [])

  const [Show, setShow] = useState(false)
  const [Value, setValue] = useState('')
  const subminForm = (e) => {
    e.preventDefault()
    let r = /^\d+$/
    if (r.test(Value)) {
      if (Value !== '' && parseInt(Value) > 0) {
        let stories = Stories
        setStoriesVisile(stories.filter(element => element.content.data[0].price <= parseInt(Value)))
      }
    } else {
      if (Value === '') {
        let stories = Stories
        setStoriesVisile(stories)
      } else {
        alert('wpisz liczby :)')
      }
    }
  }

  return (
    <>
      <Container fluid>
        <Row className='mx-0'>
          <Col xs={12} className='d-flex justify-content-between mb-3 py-4 px-4'>
            <span className='SuisseIntB'>Navarra<sup>LAB</sup></span>
            <span > <i class="fa fa-bars"></i></span>
          </Col>
        </Row>
      </Container>
      <Container className='mt-5'>
        <Row className='mx-0'>
          <Col xs={12} className='d-flex justify-content-between mb-3'>
            <span className='Micro SuisseInt'>Immobilien</span>

          </Col>
          <Col xs={12} className='d-flex justify-content-between mb-3'>
            <span className='SuisseIntM h1'>Kaufen</span>
            <span className='SuisseInt'>48 Inserate</span>
          </Col>
          <Col xs={12} className='d-flex justify-content-between mb-3'>
            <span className='Helvetica'>FILTER (1)</span>
            <span className='Helvetica'>SORTIERUNG</span>
          </Col>
          <Col xl={3} className='d-xl-block d-none'>
            <Form>
              <InputGroup >
                <InputGroup.Text className='CostumStyleL'>@</InputGroup.Text>
                <FormControl className='CostumStyleR' placeholder="Wo: Ort, Stadt, Straße, PLZ" />
              </InputGroup>
            </Form>
            <ListGroup variant="flush">
              <ListGroup.Item className='py-3 d-flex justify-content-between Background'>
                <span>Typ</span>
                <span >+</span>

              </ListGroup.Item>
              <ListGroup.Item className='Background '>
                <div className=' py-3 d-flex justify-content-between CostumButton' onClick={() => { Show ? setShow(false) : setShow(true) }}>
                  <span>Preis bis</span>
                  <span >+</span>
                </div>
                <SlideDown className='MySlideDown'>
                  {
                    Show ? <div>
                      <Form onSubmit={(e) => { subminForm(e) }}>
                        <InputGroup >
                          <FormControl onChange={(e) => { setValue(e.target.value) }} className='CostumStyle' placeholder="Max." />
                        </InputGroup>
                      </Form>
                    </div> : ''
                  }

                </SlideDown>

              </ListGroup.Item>
              <ListGroup.Item className='py-3 d-flex justify-content-between Background'>
                <span>Fläche ab</span>
                <span >+</span>
              </ListGroup.Item>
              <ListGroup.Item className='py-3 d-flex justify-content-between Background'>
                <span>Zimmer ab</span>
                <span >+</span>
              </ListGroup.Item>
              <ListGroup.Item className='py-3 d-flex justify-content-between Background'>
                <span>Umkreis</span>
                <span >+</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xl={9} className='px-0'>
            <ListOfIteams stories={StoriesVisile} />
          </Col>
        </Row >

      </Container >
      <Container className='rounded py-5 px-5  my-5' id='contact'>
        <Row>
          <Col xs={12} sm={8} lg={7} xl={4}>
            <p className="Micro SuisseInt mb-3 text-muted">Newsletter</p>
            <p className='SuisseIntM h1 mb-3 text-white'>
              Einzigartige Inspira-tion und wertvolle Einblicke
            </p>
            <p className='SuisseIntl mb-xl-5 mb-0 text-white'>
              Dictumst cras netus in ultricies. Sit platea id quisque consequat tempor at neque, leo quis quis convallis.
            </p>

            <Form.Label htmlFor="basic-url" className='mb-1 mt-4 text-light'>Name</Form.Label>
            <InputGroup className="mb-3">
              <FormControl id="basic-url" className='SuisseIntl py-2' aria-describedby="basic-addon3" placeholder='Name eingeben' />
            </InputGroup>

            <Form.Label htmlFor="basic-url" className='mb-1 text-light'>E-Mail</Form.Label>
            <InputGroup className="mb-3">
              <FormControl id="basic-url" className='SuisseIntl py-2' aria-describedby="basic-addon3" placeholder='E-Mail Addresse eingeben' />
            </InputGroup>
            <Form>
              <div key={`default-checkbox`} className="mb-3">
                <Form.Check
                  type='checkbox'
                  label={`Ich stimme der Datenschutzerklärung zu`}
                />
              </div>
            </Form>
            <button id="CostumButton2" className='py-3 px-3 SuisseIntl mb-3' >
            Anmelden
            </button>
          </Col>
        </Row>
      </Container>
      <Container fluid className='Footer py-5 px-sm-3 px-xl-5'>
        <Row className='mx-0'>
          <Col xl={4} sm={12} >
            <p className="Micro SuisseInt">Wie können wir Ihnen helfen?</p>
            <p className='h2 SuisseIntB'>Kontaktieren Sie uns per Telefon oder E-Mail</p>
          </Col>
          <Col xl={8} sm={12} className='mb-3'>
            <Row className='w-100 mx-0 px-sm-4 px-0'>
              <Col xs={12} sm={6} className='py-5 border-bottom mx-0 px-0'>
                <div className='w-100 rounded-top py-4 bg-white border-bottom Helvetica'>
                  <Row className='mx-0 px-0'>
                    <Col xs={2} className='px-4 position-relative rounded-circle'>
                      <div className='Squere'>
                        <img className='IconPoneMail' src={Phone} />
                      </div>
                    </Col>
                    <Col xs={10}>
                      <span>0800 032 0000</span>
                    </Col>
                  </Row>
                </div>
                <div className='w-100 rounded-bottom py-4 bg-white Helvetica'>
                  <Row className='mx-0   px-0'>
                    <Col xs={2} className='px-4 position-relative rounded-circle'>
                      <div className='Squere'>
                        <img className='IconPoneMail' src={Mail} />
                      </div>
                    </Col>
                    <Col xs={10}>
                      <span>service@premiumhomes.de</span>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={12} sm={6} className='mx-0 px-0 py-5 border-bottom'>
                <Row className='w-100 mx-0 px-sm-4 px-0'>
                  <Col xs={6} sm={12} xl={6} className='px-0 '>
                    <p className="Micro SuisseInt mb-1">Unser Hauptsitz</p>
                    <p className='SuisseInt mb-0 FSize14'>Am Postbahnhof 17</p>
                    <p className='SuisseInt FSize14'>10243 Berlin </p>
                  </Col>
                  <Col xs={6} sm={12} xl={6} className='px-0'>
                    <p className="Micro SuisseInt mb-1">Öffnungszeiten</p>
                    <p className='d-flex justify-content-between mb-0 SuisseInt FSize14'><span>Mo. — Fr.</span> <span>8 —16 Uhr</span> </p>
                    <p className='d-flex justify-content-between mb-0 SuisseInt FSize14'><span>Sa. — So.</span>  <span>geschlossen</span></p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={6} className="py-3 mx-0 px-0">
                <p className="Micro SuisseInt mb-0">Immobilien</p>
                <div className='d-flex align-items-center justify-content-between mb-0 py-3 border-bottom'>
                  <span className='h5 SuisseIntM mb-0'>Verkaufen</span>       <span> <img src={Arrow} /> </span>
                </div>
                <div className='d-flex align-items-center justify-content-between mb-0 py-3'>
                  <span className='h5 SuisseIntM mb-0'>Kaufen</span>       <span><img src={Arrow} /></span>
                </div>
              </Col>
              <Col xs={3} className='d-xl-block d-none'>
              </Col>
              <Col xs={12} sm={3} xl={3} className='position-relative py-3 mx-0 px-0'>
                <div className='Icons'>
                  <Row className='mx-0 px-sm-4 px-0'>
                    <Col xs={6} sm={12} className='mx-0 px-0'>
                      <p className='mb-3 align-bottom Micro SuisseInt'>Folge uns</p>
                    </Col>
                    <Col xs={6} sm={12} className='mx-0 px-0'>
                      <div className='d-flex justify-content-between mb-0 '>
                        <span><img src={Instagram} /></span>      <span><img src={LI} /></span>      <span><img src={FB} /></span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={4} className='d-xl-block d-none '>

          </Col>
          <Col xs={12} xl={8} className='mx-0 px-0 px-sm-4 Micro border-top py-4'>
            <Row className='mx-0   px-0'>
              <Col xl={2} sm={3} xs={6}>
                Impressum
              </Col>
              <Col xl={2} sm={3} xs={6}>
                AGB
              </Col>
              <Col xl={2} sm={3} xs={6}>
                Datenschutz
              </Col>
              <Col xl={2} sm={3} xs={6}>
                Cookie Einstellungen
              </Col>
              <Col xl={4} xs={12} className='position-relative  py-3 py-xl-0 mt-2 mt-xl-0'>
                <div className='Squere2'>
                  <img className='IconArrowUP' src={ArrowUP} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
