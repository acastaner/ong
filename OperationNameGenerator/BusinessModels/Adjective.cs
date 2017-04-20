using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OperationNameGenerator.BusinessModels
{
    [Table("Adjective")]
    public class Adjective
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Value { get; set; }
        public DateTime CreationDate {get;set;}
        public DateTime ModificationDate { get; set; }

        public Adjective()
        {
            Id = Guid.NewGuid();
            CreationDate = DateTime.Now;
        }
    }
}
