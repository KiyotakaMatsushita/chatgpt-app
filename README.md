# ChatGPT App

Welcome to the ChatGPT App repository! This application allows you to interact with OpenAI's powerful GPT model on your local desktop, leveraging the power of Next.js in SSG mode and Tauri to create a secure, user-friendly experience. The user interface of this application is inspired by and created with reference to the [chatbot-ui](https://github.com/mckaywrigley/chatbot-ui) repository.

![CleanShot 2023-04-02 at 14 40 02](https://user-images.githubusercontent.com/6897406/229333851-31cb7bd4-52be-4d89-a7db-fb2d025f5701.gif)


## Features

- Local desktop application, ensuring data privacy
- Built with Next.js Static Site Generation (SSG) for enhanced performance
- Utilizes your OpenAI API key for access to the GPT model
- Developed using Tauri, a lightweight framework for creating cross-platform applications
- Ensures data is not sent to servers other than OpenAI
- Designed with security in mind
- User interface inspired by the [chatbot-ui](https://github.com/mckaywrigley/chatbot-ui) project

## Installation

Clone the repository:

```bash
git clone https://github.com/KiyotakaMatsushita/chatgpt-app.git
```

Change the current working directory to the repository folder:

```bash
cd chatgpt-app
```

Install the dependencies using pnpm:

```bash
pnpm install
```

Start the development server:

```bash
pnpm tauri dev
```

Build the Tauri application:

```bash
pnpm tauri build
```

## Usage

Once the application is built, launch the ChatGPT App executable in the src-tauri/target directory. You can now interact with the powerful GPT model on your local desktop, ensuring your data remains secure and private.

## Contributing

We welcome contributions to the ChatGPT App repository! If you find a bug or would like to suggest a new feature, please create an issue or submit a pull request.

## License

The ChatGPT App is released under the MIT License.
