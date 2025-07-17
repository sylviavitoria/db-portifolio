interface HabilidadeProps {
    titulo: string;
    nivel: number;
}

export default function Habilidade({ titulo, nivel }: HabilidadeProps) {
    const totalDeBolinhas = 5;

    return (
        <div className="habilidade-item">
            <div className="habilidade-content">
                <span className="bullet-point">•</span>
                <span className="habilidade-titulo">{titulo}</span>
            </div>
            <div className="bolinhas-container">
                {[...Array(totalDeBolinhas)].map((_, indice) => (
                    <div
                        key={indice}
                        className={`bolinha ${indice < nivel ? 'cheia' : 'vazia'}`}
                    />
                ))}
            </div>
        </div>
    );
}