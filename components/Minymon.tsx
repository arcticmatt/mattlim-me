declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "minymon-answer": any;
      "minymon-body": any;
      "minymon-dialog": any;
      "minymon-feedback": any;
      "minymon-music": any;
      "minymon-question": any;
    }
  }
}

export default function Minymon(): JSX.Element {
  return (
    <div style={{ position: "relative", zIndex: 999 }}>
      <minymon-body
        enableFeed="true"
        enableTalk="true"
        idsString="NGY3MjI1YTktMmZjMS00ZmI0LTliODMtZGYyYzZiYzJmNjU4LnIzbWRpOFZzYUJ2ZkpEMjl2MDdtNQ=="
        infoTitle="Hi there!"
        theme="blue"
      >
        <minymon-question question="What is this thingy?" theme="blue">
          <minymon-answer
            answer={`It's a minymon! Check it out at <a href='https://minymon.com'>minymon.com</a>.`}
            question="What is this thingy?"
            theme="blue"
          ></minymon-answer>
        </minymon-question>
        <minymon-feedback
          description="Send Matt a message!"
          mid="4f7225a9-2fc1-4fb4-9b83-df2c6bc2f658"
          theme="blue"
          uid="r3mdi8VsaBvfJD29v07m5"
        ></minymon-feedback>
        <minymon-music
          src="https://firebasestorage.googleapis.com/v0/b/minymon-d541f.appspot.com/o/users%2Fr3mdi8VsaBvfJD29v07m5%2FthemeSong?alt=media&token=8f4b2d92-e5e5-4fd4-ac83-4eb5e11d97e6"
          theme="blue"
        ></minymon-music>
        <minymon-dialog
          dialog="%5B%7B%22id%22%3A%226aHDwpawvSTdtD0LxFUNf%22%2C%22prompt%22%3A%22How%27s%20it%20going%3F%22%2C%22responses%22%3A%5B%7B%22id%22%3A%2293YVqlBybPphQ4RR0ENGT%22%2C%22response%22%3A%22Pretty%20good%22%2C%22nextPromptId%22%3A%22uf_abgBh2DXnPYLFho-ZA%22%7D%2C%7B%22id%22%3A%22LfEzFeImUqYnE96sH4O4B%22%2C%22response%22%3A%22Could%20be%20better%22%2C%22nextPromptId%22%3A%22kg7lCs05yTbW3GQ9AbECh%22%7D%5D%7D%2C%7B%22id%22%3A%22uf_abgBh2DXnPYLFho-ZA%22%2C%22prompt%22%3A%22Glad%20to%20hear%20it%21%22%2C%22responses%22%3A%5B%5D%7D%2C%7B%22id%22%3A%22kg7lCs05yTbW3GQ9AbECh%22%2C%22prompt%22%3A%22Maybe%20adopting%20a%20minymon%20will%20cheer%20you%20up%20%3A%29%22%2C%22responses%22%3A%5B%5D%7D%5D"
          theme="blue"
        ></minymon-dialog>
      </minymon-body>
    </div>
  );
}
