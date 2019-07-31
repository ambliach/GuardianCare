import React, { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from '../utils/API';
import CloudinaryUploadWidget from '../components/CloudinaryUploadWidget';
import ImagesLayout from '../components/ImagesLayout';

const Main = (props) => {
  const { isLoggedIn, email } = props;
  const [description, setDescription] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [arrMediaInfo, setMediaInfo] = useState([]);
  let cloudinaryUrl = '';
  let source = {};

  // get user's stored pictures
  const getMediaInfo = useCallback(() => {
    API
      .getMediaInfo(source)
      .then(res => setMediaInfo(res.data.pics))
      .catch((err) => {
        console.log(`Something went wrong in data retrieval ${JSON.stringify(err)}`);
      });
  }, [arrMediaInfo]);

  useEffect(() => {
    source = axios.CancelToken.source();
    getMediaInfo();

    return function cleanup() { // like ComponentWillUnmount
      API.cancelRequest(source);
    };
  }, []); // like ComponentDidMount()

  const resetValues = () => {
    setIsValid(true);
    setDescription('');
    setIsSubmitted(true);
    cloudinaryUrl = '';
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setDescription(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!(cloudinaryUrl && description)) {
      setIsValid(false);
      return;
    }
    API
      .postInfo({
        picUrl: cloudinaryUrl,
        note: description,
      }, source)
      .then(() => {
        getMediaInfo();
        resetValues();
      })
      .catch(err => console.log(err));
  };

  const setCloudinaryInfo = (imgUrl) => {
    cloudinaryUrl = imgUrl;
  };

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      {/* <Row className="justify-content-center mt-3">
        <Col xs={12} md={8}>
          <h3 className="text-center">
            Main page
            {' '}
            {email}
          </h3>
          <Form>
            <h3>Upload Picture</h3>
            <Form.Group>
              <Form.Label htmlFor="description">
              Description
                <Form.Control
                  type="text"
                  name="description"
                  value={description}
                  onChange={handleOnChange}
                  placeholder="Enter description"
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <CloudinaryUploadWidget
                cloudinaryInfo={setCloudinaryInfo}
                isSubmitted={isSubmitted}
              />
            </Form.Group>
            <Button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Add to Album
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {
          !isValid
            ? (
              <p className="bg-danger text-white font-weight-bold">
            Both description and url must be entered to complete submission.
              </p>
            )
            : null
        }
      </Row>
      <Row className="justify-content-center">
        <ImagesLayout images={arrMediaInfo} />
      </Row> */}


      <Form.Row>
        <Form.Group as={Col} controlId="formGridDate">
      <Form.Label>Date</Form.Label>
      <Form.Control ref="Date" placeholder="xx/xx/xxxx" />
    </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>Patient's First Name</Form.Label>
      <Form.Control ref="firstName" placeholder="First Name" />
    </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Patient's Last Name</Form.Label>
      <Form.Control ref="lastName" placeholder="Last Name" />
    </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCHHA">
      <Form.Label>CHHA</Form.Label>
      <Form.Control ref="CHHA" />
    </Form.Group>

        <Form.Group as={Col} controlId="formGridDays">
      <Form.Label>Days</Form.Label>
      <Form.Control ref="days" />
    </Form.Group>

        <Form.Group as={Col} controlId="formGridHours">
      <Form.Label>Hours</Form.Label>
      <Form.Control ref="hours" />
    </Form.Group>

        <Form.Group as={Col} controlId="formGridDuration">
      <Form.Label>Duration</Form.Label>
      <Form.Control ref="duration" />
    </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridDiagnosis">
      <Form.Label>Diagnosis, Problems/Needs</Form.Label>
      <Form.Control ref="diagnosis" />
    </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridAddresss">
      <Form.Label>Address</Form.Label>
      <Form.Control ref="address" />
    </Form.Group>
        <Form.Group as={Col} controlId="formGridPhoneNumber">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control ref="phoneNumber" />
    </Form.Group>
        <Form.Group as={Col} controlId="formGridTemperature">
      <Form.Label>Temperature</Form.Label>
      <Form.Control ref="temperature" />
    </Form.Group>
        <Form.Group as={Col} controlId="formGridPulse">
      <Form.Label>Pulse</Form.Label>
      <Form.Control ref="pulse" />
    </Form.Group>
        <Form.Group as={Col} controlId="formGridRespirations">
      <Form.Label>Respirations</Form.Label>
      <Form.Control ref="respirations" />
    </Form.Group>
        <Form.Group as={Col} controlId="formGridWeight">
      <Form.Label>Weight</Form.Label>
      <Form.Control ref="weight" />
    </Form.Group>
      </Form.Row>

      <Form.Row>
  {/* <Form.Group controlId="formGridBathType">
    <Form.Label>Bath Type</Form.Label>
    <Form.Control as="select">
      <option>Tub shower</option>
      <option>Bed Bath</option>
      <option>Assist Bath</option>
      <option>Shampoo</option>
      <option>Combo Hair</option>
      <option>Oral Care</option>
      <option>Electric Shave</option>
      <option>Dress</option>
      <option>Moisturize</option>
    </Form.Control>
  </Form.Group> */}

  <div>
  <h3>
    Bath
  </h3>
</div>
  <Form.Group controlId="formgridTubShower">
  <Form.Label>Tub Shower</Form.Label>
  <Form.Control as="select">
    <option>N/A</option>
    <option>Total Support</option>
    <option>Some Assistance</option>
    <option>Self-Care</option>
  </Form.Control>
</Form.Group>

  <Form.Group controlId="formgridBedBath">
  <Form.Label>Bed Bath</Form.Label>
  <Form.Control as="select">
    <option>N/A</option>
    <option>Total Support</option>
    <option>Some Assistance</option>
    <option>Self-Care</option>
  </Form.Control>
</Form.Group>

  <Form.Group controlId="formgridAssistBath">
  <Form.Label>Assist Bath</Form.Label>
  <Form.Control as="select">
    <option>N/A</option>
    <option>Total Support</option>
    <option>Some Assistance</option>
    <option>Self-Care</option>
  </Form.Control>
</Form.Group>

  <Form.Group controlId="formgridShampoo">
  <Form.Label>Shampoo</Form.Label>
  <Form.Control as="select">
    <option>N/A</option>
    <option>Total Support</option>
    <option>Some Assistance</option>
    <option>Self-Care</option>
  </Form.Control>
</Form.Group>

  <Form.Group controlId="formgridCombHair">
  <Form.Label>Comb Hair</Form.Label>
  <Form.Control as="select">
    <option>N/A</option>
    <option>Total Support</option>
    <option>Some Assistance</option>
    <option>Self-Care</option>
  </Form.Control>
</Form.Group>

  <Form.Group controlId="formgridOralCare">
  <Form.Label>Oral Care</Form.Label>
  <Form.Control as="select">
    <option>N/A</option>
    <option>Total Support</option>
    <option>Some Assistance</option>
    <option>Self-Care</option>
  </Form.Control>
</Form.Group>

  <Form.Group controlId="formgridElectricShave">
  <Form.Label>Electric Shave</Form.Label>
  <Form.Control as="select">
    <option>N/A</option>
    <option>Total Support</option>
    <option>Some Assistance</option>
    <option>Self-Care</option>
  </Form.Control>
</Form.Group>

  <Form.Group controlId="formgridDress">
  <Form.Label>Dress</Form.Label>
  <Form.Control as="select">
    <option>N/A</option>
    <option>Total Support</option>
    <option>Some Assistance</option>
    <option>Self-Care</option>
  </Form.Control>
</Form.Group>

  <Form.Group controlId="formgridMoisturize">
  <Form.Label>Moistureize</Form.Label>
  <Form.Control as="select">
    <option>N/A</option>
    <option>Total Support</option>
    <option>Some Assistance</option>
    <option>Self-Care</option>
  </Form.Control>
</Form.Group>
</Form.Row>

      <Form.Row>
  <div>
  <h3>
    Elimination
  </h3>
</div>
  <Form.Group controlId="formgridIncontinent">
  <Form.Label>Incontinent</Form.Label>
  <Form.Control as="select">
    <option>N/A</option>
    <option>Total Support</option>
    <option>Some Assistance</option>
    <option>Self-Care</option>
  </Form.Control>
</Form.Group>

  <Form.Group controlID="formgridIncontinentFreq">
  <Form.Label>Frequency</Form.Label>
  <Form.Control as="select">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4+</option>
</Form.Control>
</Form.Group>
</Form.Row>
      <Form.Row>
  <Form.Group controlId="formgridEmptyCathBag">
  <Form.Label>Empty Cath Bag</Form.Label>
  <Form.Control as="select">
    <option>N/A</option>
    <option>Total Support</option>
    <option>Some Assistance</option>
    <option>Self-Care</option>
  </Form.Control>
</Form.Group>
  <Form.Group controlID="formgridCathBagFreq">
  <Form.Label>Frequency</Form.Label>
  <Form.Control as="select">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4+</option>
</Form.Control>
</Form.Group>

</Form.Row>

<Form.Row>
  <div>
    <h3>
      Pertinent Information
    </h3>
  </div>
  <Form>
  {['checkbox', 'radio'].map(type => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
      <Form.Check
        inline
        disabled
        label="3 (disabled)"
        type={type}
        id={`inline-${type}-3`}
      />
    </div>
  ))}
</Form>
</Form.Row>

    </Container>
  );
};

Main.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
};

export default Main;
