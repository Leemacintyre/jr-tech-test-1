export default function Home() {


  return <div>
    <h1>VET.CT Software Developer technical test</h1>
    <h2>About VET.CT</h2>
    <ul>
      <li>VET.CT is a B2B organisation. Our customers are vets working in
        practices all over the world
      </li>
      <li>We provide radiology reporting and tele consultation services to help
        vets to diagnose and treat patients
      </li>
    </ul>

    <h2>Brief & Guidelines</h2>
    <ul>
      <li>Turn the user stories into a React app that will display the relevant
        information.
      </li>
      <li>You must use React and JavaScript (preferably Typescript) to complete
        the test.
      </li>
      <li>The role will involve UI/UX work, so we expect the project to look
        nice, function well, and be user friendly. It’s up to you how you
        display the data and style the app, but you must use the provided /cases
        and /cases/:id endpoint, logo and colours.
      </li>
      <li>There is no time limit for the test. We would like to see the required
        user stories completed but you are also welcome to take the test further
        if you wish by completing the bonus user stories and/or adding any
        features you feel would be beneficial to the user.
      </li>
      <li>You are welcome to use any npm packages or component libraries that
        you wish as long as you display a strong understanding of React,
        HTML/CSS and JavaScript/TypeScript.
      </li>
      <li>If you pass the tech test, you will be invited to discuss your work
        with the development team. We will ask you about the decisions you made
        and give you the opportunity to talk about any other features you would
        have liked to include.
      </li>
    </ul>

    <h2>User Stories</h2>
    <h3>Required</h3>
    <ul>
      <li>As a VET.CT customer, I would like to see a list of all my cases,
        including case key, patient name, owner name, specialty and creation
        date, so I can easily identify specific cases.
      </li>
      <li>As a VET.CT customer, I would like to be able to see all available
        data on a specific case by clicking on the case list row, so I can read
        further information on the case.
      </li>
      <li>As a VET.CT customer, I would like to see an image associated with the
        case, so I know what the patient looks like. (note: don’t worry if the
        image doesn’t match the breed, we have used random images)
      </li>
    </ul>

    <h3>Bonus</h3>
    <ul>
      <li>As a VET.CT customer, I would like to search my case list by patient
        name or breed, so I can find a patient more quickly.
      </li>
      <li>As a VET.CT customer, I would like my cases to be paginated so I don't
        have to scroll through long lists
      </li>
      <li>As a VET.CT customer and screen reader user, I would like to be able
        to use the application without encountering accessibility issues, so I
        am able to do my job.
      </li>
    </ul>

    <h2>Resources</h2>
    <h3>Endpoint</h3>
    <ul>
      <li>GET https://jr-tech-test-1.vercel.app/api/doc</li>
      <li>GET https://jr-tech-test-1.vercel.app/api/ui</li>
      <li>GET https://jr-tech-test-1.vercel.app/api/cases</li>
      <li>GET https://jr-tech-test-1.vercel.app/api/cases/:id</li>
    </ul>

    <h3>Logo</h3>
    <p>https://euw2-prod-vetct-public-assets.s3.eu-west-2.amazonaws.com/vetct-logos/VETCT-logo-cropped-burgundy.png</p>

    <h3>Branding</h3>
    <ul>
      <li>Burgundy: #880837</li>
      <li>Dark grey (text): #383838</li>
    </ul>


  </div>;
}
