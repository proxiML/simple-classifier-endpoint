<div align="center">
  <a href="https://www.proximl.ai/"><img src="https://www.proximl.ai/img/logo.svg"></a><br>
</div>

# Simple Image Classifier Endpoint

### Prerequisites

Before beginning this example, ensure that you have satisfied the following prerequisites.

- A valid [proxiML account](https://auth.proximl.ai/login?response_type=code&client_id=536hafr05s8qj3ihgf707on4aq&redirect_uri=https://app.proximl.ai/auth/callback) with a non-zero [credit balance](https://docs.proximl.ai/reference/billing-credits/)
- A python [virtual environment](https://docs.python.org/3/library/venv.html) with the [proxiML CLI/SDK](https://github.com/proxiML/python-sdk.git) installed and [configured](https://docs.proximl.ai/reference/cli-sdk#authentication).
- A current version of [Node.js](https://nodejs.org/en/) installed.

## Create the proxiML Endpoint

To create an endpoint that serves a pre-trained image classifier with the necessary route configured, run the following command from a python virtual environment with the [proxiML CLI/SDK](https://github.com/proxiML/python-sdk.git) installed and [configured](https://docs.proximl.ai/reference/cli-sdk#authentication)

```
python deploy_endpoint.py
```

Once the endpoint is running, it will print the endpoint URL to use in the subsequent steps.

#### Using the Command LIne

To get a prediction for the endpoint from the command line, you can use the `classify_image.sh` bash script in the repository. Simply specify the endpoint address from above and the path to a file you want to predict as the two arguments. For example:

```
./classify_image.sh <endpoint_address> ./images/pizza.jpg
```

#### Using a Browser

Open the file `front-end/src/config.js` with a text editor. Change the `api_address` value to the endpoint URL from the previous step and save the file. If you changed the route path in the previous step, you must also update that here.

Go to the `front-end` folder of the repository in a terminal window and type `npm install`. Once the package installation is complete, run `npm start`. This will open a web browser to http://localhost:3000 and load the example front end. Click the `Upload File` button and select an image to classify (example image files are in the `images` folder of this repository). Click `Get Prediction` to send the file to the endpoint. When the response comes back, the list of the top five class categories and their confidence rating will be displayed on the right. Click `Upload New File` and `Get Prediction` on additional images as desired.
