
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/shared/card";
import Badge from "@/components/shared/badge";
import Button from "@/components/shared/button";
import { ExternalLink } from "lucide-react";
import type { Certification } from "@types/index";

const CertificationCard = ({ certificationData }: { certificationData: Certification }) => {
  return (
    <Card className="h-full border border-border/60 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-start gap-4">
        {certificationData.imageUrl ? (
          <img
            src={certificationData.imageUrl}
            alt={`${certificationData.title} badge`}
            className="w-14 h-14 rounded-md object-contain border"
            loading="lazy"
          />
        ) : null}
        <div>
          <CardTitle className="text-lg leading-tight">{certificationData.title}</CardTitle>
          <CardDescription className="mt-1">
            {certificationData.issuer}{certificationData.level ? ` · ${certificationData.level}` : ""}{certificationData.domain ? ` · ${certificationData.domain}` : ""}
          </CardDescription>
        </div>
      </CardHeader>

      {(certificationData.skills && certificationData.skills.length > 0) ? (
        <CardContent className="flex flex-wrap gap-2">
          {certificationData.skills.map((skill:string) => (
            <Badge key={skill} variant="secondary" className="rounded-full">{skill}</Badge>
          ))}
        </CardContent>
      ) : null}

      <CardFooter className="flex flex-wrap gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>Emitida:</span>
          <time dateTime={certificationData.issuedOn}>{certificationData.issuedOn}</time>
        </div>
        {certificationData.expiresOn ? (
          <div className="flex items-center gap-2">
            <span>Expira:</span>
            <time dateTime={certificationData.expiresOn}>{certificationData.expiresOn}</time>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span>Vigente</span>
          </div>
        )}
        {certificationData.credentialUrl ? (
          <Button asChild size="sm" variant="outline" className="ml-auto">
            <a href={certificationData.credentialUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver credencial
            </a>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export default CertificationCard
