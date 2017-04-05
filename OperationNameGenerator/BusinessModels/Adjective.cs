using System;
using System.ComponentModel.DataAnnotations;

namespace OperationNameGenerator.BusinessModels
{
    public class Adjective
    {
        public Guid Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Value { get; set; }

        public Adjective()
        {
            Id = Guid.NewGuid();
        }
    }
}
