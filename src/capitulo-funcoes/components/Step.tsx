interface StepProps {
  instruction: string;
}

const stepInstructions = [
  "Passo 1: Pré-aqueça o forno a 180°C.",
  "Passo 2: Misture os ingredientes secos em uma tigela.",
  "Passo 3: Estudar e nunca desanimar ",
];

export function Step({ instruction }: StepProps) {
  return (
    <div>
      <h3>Instruções do passo - {instruction}:</h3>
      {stepInstructions.map((instruction, index) => (
        <p key={index}>{instruction}</p>
      ))}
    </div>
  );
}
