interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export default function PageTitle({
  title,
  subtitle,
}: PageTitleProps) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h1
        style={{
          margin: 0,
          fontSize: "2rem",
          fontWeight: 700,
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            color: "#666",
            marginTop: "0.5rem",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}