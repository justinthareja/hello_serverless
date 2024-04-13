const sdk = require("@aws-sdk/client-s3");
const { PutObjectCommand, S3Client } = sdk;
const client = new S3Client({});
const config = require("./config.json");
const api = require("./api");

module.exports.handler = async (event) => {
  try {
    // Compile the source code
    const Body = await getHTML();

    // Upload index.html to s3 bucket
    const command = new PutObjectCommand({
      Bucket: config.S3_BUCKET_NAME,
      Key: "index.html",
      Body,
      ContentType: "text/html; charset=utf-8",
    });
    const response = await client.send(command);
    console.log("PutObjectCommand response:", response);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Your handler() function executed successfully!",
          input: event,
        },
        null,
        2
      ),
    };
  } catch (e) {
    console.log("Upload Error", e);
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: "Your handler() function failed!",
          input: event,
          error: e,
        },
        null,
        2
      ),
    };
  }
};

const pug = require("pug");

async function getHTML() {
  const compiler = pug.compileFile("template.pug");
  const repos = await api.queryGithub();
  console.log("REPOS:", repos);
  const html = compiler({
    success: true,
    repos: JSON.stringify(repos, null, 2),
  });
  return html;
}
